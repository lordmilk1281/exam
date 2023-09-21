import { Dialog } from "@headlessui/react";
import Cross from "./Cross";

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  title: string;
  onClose: () => void;
};

const DialogModal = ({ isOpen, onClose, children, title }: Props) => {
  
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        <Dialog.Panel className="mx-auto rounded bg-white p-5 max-w-3xl w-screen space-y-6">
          <section className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-medium">{title}</Dialog.Title>
            <button onClick={onClose}>
              <Cross />
            </button>
          </section>
          <section>{children}</section>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default DialogModal;
