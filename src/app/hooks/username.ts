import {useEffect, useState} from "react";
import {nanoid} from "nanoid";

const ANIMALS = [
    "cat",
    "dog",
    "bird",
    "fish",
    "lizard",
    "snake",
    "turtle",
    "hamster",
    "rabbit",
    "horse",
    "cow",
    "pig",
    "goat",
    "sheep",
    "chicken",
    "duck",
    "elephant",
    "giraffe",
    "zebra",
    "monkey",
    "bear",
];
const STORAGE_KEY = "chatUsername";

const generateUsername = () => {
    const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
    return `anonymous-${animal}-${nanoid(5)}`;
};

export const useUsername = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const main = () => {
            const storedUsername = localStorage.getItem(STORAGE_KEY);
            if (storedUsername) {
                setUsername(storedUsername)
                return
            }

            const generated = generateUsername();
            localStorage.setItem(STORAGE_KEY, generated);
            setUsername(generated);
        };

        main();
    }, []);

    return { username }
}