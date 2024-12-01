import LoginButton from '../auth/LoginButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="text-xl font-bold">My App</div>
        <LoginButton />
      </div>
    </header>
  );
}