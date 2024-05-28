import React, { useState, useEffect, useMemo } from "react";

export const read = (key: string): any => {
	const res = sessionStorage.getItem(key);
	if (res == null) {
		return undefined;
	}

	return JSON.parse(res);
};
export const write = (key: string, item: any) => {
	if (typeof item === "undefined") {
		return;
	}
	try {
		sessionStorage.setItem(key, JSON.stringify(item));
	} catch (e) {
		console.error("An error occurred while writing to session storage:", e);
	}
};

function useSession<T>(
	key: string,
	initialState: T | undefined = undefined,
	map: (a: any) => T = (t) => t
): [T, React.Dispatch<React.SetStateAction<T>>] {
	const stored = read(key);
	const [item, setItem] = useState<T>(stored === undefined ? (initialState as T) : stored);

	useEffect(() => {
		write(key, item);
	}, [item, key]);

	const resolvedT = useMemo(() => map(item), [item, map]);
	return [resolvedT, setItem];
}

export default useSession;
