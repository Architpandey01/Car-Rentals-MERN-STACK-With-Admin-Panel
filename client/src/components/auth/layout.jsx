import { Outlet } from "react-router-dom";
import bgImage from "@/assets/Black Red Modern Automotive Car Rental Service Instagram Post.jpg"; // Import the image

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left side with background image */}
      <div
        className="hidden lg:flex items-center justify-center w-1/2 px-12"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight">
            
          </h1>
        </div>
      </div>

      {/* Right side with custom background color */}
      <div
        className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#f0f0f0", 
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
