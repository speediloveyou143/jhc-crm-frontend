const messages = [
  '🎉 Welcome aboard!',
  '🚀 Your account is ready!',
  '✅ Signup complete!',
  '🥳 Let’s get started!',
  '🙌 All set!',
];

const SuccessMessage = () => (
  <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-50 to-purple-100">
    <div className="text-center text-xl font-semibold bg-white p-10 rounded-xl shadow-xl">
      {messages[Math.floor(Math.random() * messages.length)]}
    </div>
  </div>
);

export default SuccessMessage;
