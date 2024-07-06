import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = () => {
    return (
      <>
        <div className="mt-5 laptop:mt-40 p-2 laptop:p-0 flex justify-center items-center h-full">
          <div className="text-center">
            <h2 className="text-7xl font-bold mb-5">Contact</h2>
            <div className="mt-10">
              <h3 className="text-2xl tablet:text-3xl laptop:text-6xl laptopl:text-8xl text-bold">
                ON TRAVAILLE
              </h3>
              <h3 className="text-2xl tablet:text-3xl laptop:text-6xl laptopl:text-8xl text-bold">
                ENSEMBLE ?
              </h3>
              <Button type="primary" showDatePicker>
                PRENDRE RENDEZ-VOUS
              </Button>
              <div className="mt-10">
                <Socials />
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-3">
          Template de{" "}
          <Link href="http://www.chetanverma.com">
            <a className="underline underline-offset-1">Chetan Verma</a>
          </Link>
          <p> redesign par Anaël Penchenat</p>
        </h3>
      </>
    );
  };
  
  export default Footer;
