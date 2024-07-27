import React from "react";
import Image from "next/image";
import HubIcon from "@mui/icons-material/Hub";
import { motion } from "framer-motion";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function Header({ showSlider, setShowSlider }) {
    return (
        <div
            className="absolute left-12 top-20 z-[101] flex gap-5 items-center"
            style={{ width: "calc(100vw - 96px)" }}
        >
            <Image
                src="/assets/logos/vs-infotech.png"
                alt="logo"
                width={60}
                height={60}
            />
            <p className="w-[1px] bg-secondary rounded h-14" />
            <HubIcon sx={{ color: "#F0EAD6" }} />
            <motion.div
                className="ml-auto"
                animate={{
                    rotate: showSlider ? "180deg" : 0,
                }}
                transition={{
                    duration: 0.5,
                    stiffness: 200,
                    damping: 20,
                }}
            >
                <MenuOpenIcon
                    className="cursor-pointer blink"
                    fontSize="large"
                    sx={{ color: showSlider ? "#F0EAD6" : "#28282B" }}
                    onClick={() => setShowSlider((prev) => !prev)}
                />
            </motion.div>
        </div>
    );
}

export default Header;
