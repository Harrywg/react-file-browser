import { memo } from 'react';

export default memo(function Header() {
   return (
      <header>
         <h1 className="mb-8 text-center text-3xl font-bold">BrightHR File Browser</h1>
      </header>
   );
});
