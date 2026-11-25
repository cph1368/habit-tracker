import { Button } from "./Button"

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-white">Habit Tracker</h1>
      </div>
      <span className="text-zinc-400 text-sm">1/1 done today</span>

       <div className="text-zinc-400 flex flex-col gap-1">
      <span className=" text-sm">Apr 6 - Apr 12</span>  
      <div className="flex items-center gap-3">
      <Button>Prev</Button>
      <Button>Next</Button>
      </div>
    </div>
    </header>
  )
}
