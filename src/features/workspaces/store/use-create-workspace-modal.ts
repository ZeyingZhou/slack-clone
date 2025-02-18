import {atom, useAtom} from "jotai";

const modalState = atom(false);

export const useCreateWorkspaceModal = () => {
    const [isOpen, setIsOpen] = useAtom(modalState);
    const safeSetOpen = (open: boolean) => {
        // Ensure state update doesn't block event propagation
        setTimeout(() => {
            setIsOpen(open);
        }, 0);
    };
    return [isOpen, safeSetOpen] as const;
}
