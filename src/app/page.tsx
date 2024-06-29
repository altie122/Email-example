import Link from "next/link";
import "~/styles/globals.css";

export default function App() {
  return (
    <div className="h-screen p-5">
      <h1 className="text-4xl">Email examples:</h1>
      <p className="font-bold">DO NOT USE REAL INFO <span className="font-normal align-super text-xs">(except for the email)</span> IN THE FOLLOWING FORMS!</p>
      <p>Both examples use the same email template and framework but use different CSS</p>
      <div className="flex flex-row gap-4">
        <div className="border-2 border-white rounded-lg p-4 flex-grow">
          <h1 className="text-4xl font-bold">My Version:</h1>
          <p>Made with Tailwind CSS</p>
          <Link href="/my_version" className=" text-gray-300 decoration-dashed decoration-current hover:decoration-solid hover:text-gray-400">Visit</Link>
        </div>
        <div className="border-2 border-white rounded-lg p-4 flex-grow">
          <h1 className="text-4xl font-bold">Exact Copy:</h1>
          <p>Made with <Link  href="/style.css" className=" text-gray-300 decoration-dashed decoration-current hover:decoration-solid hover:text-gray-400">this CSS</Link></p>
          <Link href="/exact_copy" className=" text-gray-300 decoration-dashed decoration-current hover:decoration-solid hover:text-gray-400">Visit</Link>
        </div>
      </div>
      <p>All code for these examples are available on <Link href="https://github.com/altie122/Email-example" className=" text-gray-300 decoration-dashed decoration-current hover:decoration-solid hover:text-gray-400">GitHub</Link></p>
    </div>
  );
}