import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">Welcome, {session.user?.name}!</span>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn('line')}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#00C300] rounded-md hover:bg-[#00B300]">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.348 0 .63.285.63.63 0 .349-.282.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.115-.51-.307l-1.891-2.383v2.064c0 .346-.282.629-.631.629-.345 0-.627-.283-.627-.629V8.108c0-.345.282-.63.63-.63.246 0 .47.145.561.371l1.891 2.382V8.108c0-.345.282-.63.63-.63.346 0 .631.285.631.63l-.003 4.771zm-7.246.629c-.345 0-.627-.283-.627-.629V8.108c0-.345.282-.63.63-.63s.63.285.63.63v4.771c0 .346-.282.629-.633.629zm-3.347 0c-.343 0-.626-.283-.626-.629V8.108c0-.345.283-.63.63-.63.348 0 .63.285.63.63v4.771c0 .346-.282.629-.634.629z"/>
      </svg>
      Sign in with LINE
    </button>
  );
}