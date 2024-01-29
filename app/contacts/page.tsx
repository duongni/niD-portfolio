"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <div ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75, scale: 0 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          initial="hidden"
          animate={mainControl}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <h1 className="font-bold text-black backdrop:leading-6 tracking-wide text-4xl  text-center mt-[200px]">
            Get in touch.
          </h1>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75, scale: 0 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          initial="hidden"
          animate={mainControl}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          {" "}
          <ul className="flex flex-col justify-center items-center mb-[75px]">
            <li>
              Email:{" "}
              <span className="underline font-base hover:line-through">
                duongni2004@gmail.com
              </span>
            </li>
            <li>
              On the internet:{" "}
              <span className="">
                <Link
                  href="https://www.linkedin.com/in/ni-duong/"
                  className="underline font-base hover:line-through"
                >
                  linkedin
                </Link>{" "}
                |{" "}
                <Link
                  href="https://github.com/duongni"
                  className="underline font-base hover:line-through"
                >
                  {" "}
                  Github{" "}
                </Link>
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
