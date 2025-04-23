interface Props {
   handleClick: () => void;
   children: React.ReactNode;
}

export default function Item({ handleClick, children }: Props) {
   return (
      <button className="flex items-center gap-2" onClick={handleClick}>
         {children}
      </button>
   );
}
