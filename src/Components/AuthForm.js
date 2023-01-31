import { HiCheckCircle } from "react-icons/hi";

const AuthForm = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <div></div>
        <div>
          <img src="https://cdn0.agoda.net/images/agodavip/signupcage.svg"></img>
          <div>
            <p>Sign in to unlock more benefits</p>
            <div className="flex items-center">
              <HiCheckCircle />
              <p>Best price Guarantee on bookings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div>
        
      </div>
    </>
  );
};

export default AuthForm;
