import { Button } from "./components/Button";

import { Citrus, Pizza } from "lucide-react";

export default function App() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center p-8">
      <div className="flex flex-col gap-4">
        <Button
          onClick={(event) => alert(event.currentTarget.innerText)}
          text="Test me"
          icon={Pizza}
        />
        <Button
          primary
          onClick={(event) => alert(event.currentTarget.innerText)}
          text="Test me"
          icon={Citrus}
        />
      </div>
    </main>
  );
}
