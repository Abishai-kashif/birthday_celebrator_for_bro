import { useRef, useEffect } from "react";

const usePlaySound = (url: string) => {
	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		audioRef.current = new Audio(url);

		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current = null;
			}
		};
	}, [url]);

	const playSound = () => {
		if (audioRef.current) {
			audioRef.current
				.play()
				.catch((error) => console.error("Error playing sound:", error));
		}
	};

	return playSound;
};

export default usePlaySound;
