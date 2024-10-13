"use client";
import Image from "next/image";
import Link from "next/link";

interface Props {
    callback: () => void;
}

const BalloonButton: React.FC<Props> = ({ callback }) => {
    return (
        <button
            className="hover:scale-[0.9] active:scale-[100] transition-all duration-400"
            onClick={callback}
            title="Pop It"
        >
            <Image
                src={"/balloon.png"}
                alt="Balloon"
                height={"550"}
                width={"350"}
            />
        </button>
    );
};

export default BalloonButton;
