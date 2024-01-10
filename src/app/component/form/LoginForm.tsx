/**
 * Props for the LoginForm component.
 */
interface LoginFormProps {
  /**
   * Function to handle the login action.
   */
  onLogin: () => void;
  /**
   * Function to handle input change.
   * @param event - The change event object.
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Object containing the email and password for the new login.
   */
  newLogin: { email: string; password: string };
  /**
   * Message to display for any login errors.
   */
  message: string;
}

/**
 * A form component for user login.
 * @param props - The props for the LoginForm component.
 * @returns The rendered LoginForm component.
 */
export default function LoginForm({
  onLogin,
  onChange,
  newLogin,
  message,
}: LoginFormProps) {
  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-4 text-xl font-bold text-center">Login form</h1>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
            value={newLogin.email}
            onChange={onChange}
            name="email"
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            value={newLogin.password}
            onChange={onChange}
            name="password"
          />
        </div>

        <div className="mb-6">
            <p className="text-red-500 text-xs italic">{message}</p>
        </div>
       
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onLogin}
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}
