import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:flex">
            <Image
              src="https://w7.pngwing.com/pngs/198/618/png-transparent-nike-mag-nike-hyperdunk-shoe-sneakers-nike-physical-fitness-hand-basketballschuh.png"
              alt=""
              width={768}
              layout="responsive"
              height={768}
              className="object-cover"
            />
          </div>
          <div>2</div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
