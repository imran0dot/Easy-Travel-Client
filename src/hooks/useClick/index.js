import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            const el = ref?.current;
            if (!el || el.contains((event?.target) || null)) {
                return;
            }

            handler(event);

        };


        document.addEventListener("click", listener);
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);


        return () => {
            document.removeEventListener("click", listener);
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        }
    }, [ref, handler])
};