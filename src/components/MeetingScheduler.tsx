import React, { useState } from 'react';
import { Calendar, Clock, Video, Users, FileText, Copy, Check, ExternalLink, MapPin, Globe } from 'lucide-react';

interface MeetingDetails {
  title: string;
  date: string;
  time: string;
  duration: string;
  timezone: string;
  platform: 'zoom' | 'google-meet';
  agenda: string;
  attendees: string[];
}

interface MeetingSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MeetingScheduler: React.FC<MeetingSchedulerProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [meetingDetails, setMeetingDetails] = useState<MeetingDetails>({
    title: 'Consultation Call - Hakad Digital Lab',
    date: '',
    time: '',
    duration: '60',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    platform: 'zoom',
    agenda: '',
    attendees: ['hakaddigitallab@gmail.com']
  });
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleInputChange = (field: keyof MeetingDetails, value: string | string[]) => {
    setMeetingDetails(prev => ({ ...prev, [field]: value }));
  };

  const generateMeetingInvitation = () => {
    const startDateTime = new Date(`${meetingDetails.date}T${meetingDetails.time}`);
    const endDateTime = new Date(startDateTime.getTime() + parseInt(meetingDetails.duration) * 60000);
    
    const formatDateTime = (date: Date) => {
      return date.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });
    };

    const platformInstructions = meetingDetails.platform === 'zoom' 
      ? `📹 ZOOM MEETING DETAILS:
• Meeting ID: [To be provided by host]
• Passcode: [To be provided by host]
• Join URL: [To be provided by host]
• Dial-in Numbers: Available in Zoom app

JOINING INSTRUCTIONS:
1. Click the meeting link 5 minutes before start time
2. Download Zoom app if prompted
3. Enter Meeting ID and Passcode if required
4. Test your audio/video before joining`
      : `📹 GOOGLE MEET DETAILS:
• Meeting Link: [To be provided by host]
• Phone Number: [To be provided by host]
• PIN: [To be provided by host]

JOINING INSTRUCTIONS:
1. Click the meeting link 5 minutes before start time
2. Allow camera and microphone access
3. Join via phone if needed using dial-in details
4. Use Chrome browser for best experience`;

    return `📅 MEETING INVITATION

${meetingDetails.title}

🗓️ DATE & TIME:
${formatDateTime(startDateTime)} - ${formatDateTime(endDateTime)}
Duration: ${meetingDetails.duration} minutes
Timezone: ${meetingDetails.timezone}

${platformInstructions}

📋 AGENDA:
${meetingDetails.agenda || 'Discussion about your project requirements and how Hakad Digital Lab can help achieve your goals.'}

👥 ATTENDEES:
${meetingDetails.attendees.join(', ')}

📞 CONTACT:
For any questions or rescheduling, please contact:
Email: hakaddigitallab@gmail.com
Phone: +234 816 167 3433

---
Looking forward to our productive discussion!

Best regards,
Hakad Digital Lab Team`;
  };

  const generateCalendarLink = () => {
    const startDateTime = new Date(`${meetingDetails.date}T${meetingDetails.time}`);
    const endDateTime = new Date(startDateTime.getTime() + parseInt(meetingDetails.duration) * 60000);
    
    const formatForCalendar = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const title = encodeURIComponent(meetingDetails.title);
    const details = encodeURIComponent(generateMeetingInvitation());
    const startTime = formatForCalendar(startDateTime);
    const endTime = formatForCalendar(endDateTime);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&sf=true&output=xml`;
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(type);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const sendEmailInvitation = () => {
    const subject = encodeURIComponent(meetingDetails.title);
    const body = encodeURIComponent(generateMeetingInvitation());
    const recipients = meetingDetails.attendees.join(',');
    
    const mailtoLink = `mailto:${recipients}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const timezones = [
    'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
    'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Rome',
    'Asia/Tokyo', 'Asia/Shanghai', 'Asia/Kolkata', 'Asia/Dubai',
    'Africa/Lagos', 'Africa/Cairo', 'Australia/Sydney', 'Pacific/Auckland'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-blue-600 to-brand-green-500 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Schedule Meeting</h2>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ExternalLink className="h-5 w-5 rotate-45" />
              </button>
            </div>
            
            {/* Progress Steps */}
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= stepNumber ? 'bg-white text-brand-blue-600' : 'bg-white/20 text-white'
                  }`}>
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`w-8 h-0.5 mx-2 ${
                      step > stepNumber ? 'bg-white' : 'bg-white/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-blue-100">
              {step === 1 && "Meeting Details"}
              {step === 2 && "Platform & Attendees"}
              {step === 3 && "Review & Generate"}
            </div>
          </div>

          <div className="p-8">
            {/* Step 1: Basic Details */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meeting Title
                  </label>
                  <input
                    type="text"
                    value={meetingDetails.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    placeholder="Enter meeting title"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="h-4 w-4 inline mr-2" />
                      Date
                    </label>
                    <input
                      type="date"
                      value={meetingDetails.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="h-4 w-4 inline mr-2" />
                      Time
                    </label>
                    <input
                      type="time"
                      value={meetingDetails.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration (minutes)
                    </label>
                    <select
                      value={meetingDetails.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    >
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="90">1.5 hours</option>
                      <option value="120">2 hours</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Globe className="h-4 w-4 inline mr-2" />
                      Timezone
                    </label>
                    <select
                      value={meetingDetails.timezone}
                      onChange={(e) => handleInputChange('timezone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    >
                      {timezones.map((tz) => (
                        <option key={tz} value={tz}>{tz}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Platform & Attendees */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    <Video className="h-4 w-4 inline mr-2" />
                    Video Conferencing Platform
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      onClick={() => handleInputChange('platform', 'zoom')}
                      className={`p-4 border-2 rounded-xl transition-all duration-300 ${
                        meetingDetails.platform === 'zoom'
                          ? 'border-brand-blue-500 bg-brand-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Video className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold">Zoom</h4>
                          <p className="text-sm text-gray-600">Professional video conferencing</p>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleInputChange('platform', 'google-meet')}
                      className={`p-4 border-2 rounded-xl transition-all duration-300 ${
                        meetingDetails.platform === 'google-meet'
                          ? 'border-brand-green-500 bg-brand-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                          <Video className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold">Google Meet</h4>
                          <p className="text-sm text-gray-600">Integrated with Google Calendar</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="h-4 w-4 inline mr-2" />
                    Meeting Agenda (Optional)
                  </label>
                  <textarea
                    value={meetingDetails.agenda}
                    onChange={(e) => handleInputChange('agenda', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent resize-none"
                    placeholder="Describe what you'd like to discuss during the meeting..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="h-4 w-4 inline mr-2" />
                    Additional Attendees (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email addresses separated by commas"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    onChange={(e) => {
                      const emails = e.target.value.split(',').map(email => email.trim()).filter(email => email);
                      handleInputChange('attendees', ['hakaddigitallab@gmail.com', ...emails]);
                    }}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Hakad Digital Lab team will be automatically included
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Review & Generate */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Meeting Summary</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Title:</span>
                      <p className="text-gray-900">{meetingDetails.title}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Platform:</span>
                      <p className="text-gray-900 capitalize">{meetingDetails.platform.replace('-', ' ')}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Date & Time:</span>
                      <p className="text-gray-900">
                        {new Date(`${meetingDetails.date}T${meetingDetails.time}`).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Duration:</span>
                      <p className="text-gray-900">{meetingDetails.duration} minutes</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Generated Invitation</h3>
                  <div className="bg-gray-50 rounded-xl p-4 max-h-64 overflow-y-auto">
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                      {generateMeetingInvitation()}
                    </pre>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <button
                    onClick={() => copyToClipboard(generateMeetingInvitation(), 'invitation')}
                    className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-xl transition-colors"
                  >
                    {copiedText === 'invitation' ? (
                      <>
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy Invitation</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={sendEmailInvitation}
                    className="flex items-center justify-center space-x-2 bg-brand-blue-600 hover:bg-brand-blue-700 text-white px-4 py-3 rounded-xl transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Send Email</span>
                  </button>

                  <a
                    href={generateCalendarLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-brand-green-600 hover:bg-brand-green-700 text-white px-4 py-3 rounded-xl transition-colors"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Add to Calendar</span>
                  </a>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Next Steps:</h4>
                  <ol className="text-sm text-blue-800 space-y-1">
                    <li>1. Copy the invitation or send via email</li>
                    <li>2. Add the meeting to your calendar</li>
                    <li>3. We'll send you the actual meeting link before the scheduled time</li>
                    <li>4. Join the meeting 5 minutes early to test your setup</li>
                  </ol>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => step > 1 ? setStep(step - 1) : onClose()}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                {step === 1 ? 'Cancel' : 'Previous'}
              </button>

              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={
                    (step === 1 && (!meetingDetails.date || !meetingDetails.time)) ||
                    (step === 2 && !meetingDetails.platform)
                  }
                  className="px-6 py-3 bg-gradient-to-r from-brand-blue-600 to-brand-green-500 text-white rounded-xl hover:from-brand-blue-700 hover:to-brand-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-gradient-to-r from-brand-blue-600 to-brand-green-500 text-white rounded-xl hover:from-brand-blue-700 hover:to-brand-green-600 transition-all"
                >
                  Done
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingScheduler;