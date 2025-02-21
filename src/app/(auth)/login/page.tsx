import bgLogin from "@/assets/Images/login-bg.jpg";
import { BackgroundBeamsWithCollision } from "@/components/Elements/BackgroundBeamsWithCollision";
import Image from "next/image";

const Login = () => {
  return (
    <section className="min-h-screen flex">
      {/* Bagian Kiri - Gambar */}

      {/* Bagian Kanan - Form Login */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-blue-400 rounded-r-3xl">
        <BackgroundBeamsWithCollision>
          <div>
            <h1 className="text-3xl font-bold mb-6 text-black">Login</h1>
            <form className="w-full max-w-sm">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-4 border rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 mb-4 border rounded-lg"
              />
              <button className="w-full bg-blue-500 text-white p-3 rounded-lg">Login</button>
            </form>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
      <div className="w-1/2 relative">
        <Image
          src={bgLogin}
          alt="Login Background"
          layout="fill"
          objectFit="cover"
          className="rounded-r-[50px]"
          draggable={false}
        />
      </div>
    </section>
  );
};

export default Login;
