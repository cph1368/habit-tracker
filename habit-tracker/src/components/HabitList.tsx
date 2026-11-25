import { endOfWeek, format, startOfWeek } from "date-fns"
import { Button } from "./Button"
import { eachDayOfInterval } from "date-fns/fp/eachDayOfInterval"

export function HabitList() {

    // const habits = []
    const habits = [
        { id: "1", name: "Hi" },
        { id: "2", name: "Bye" },
    ]

    if (habits.length === 0) {
        return (
            <p className="text-center text-zinc-500 py-2"> No habits yet. Add one above to get started </p>
        )
    }

    return <div className="flex flex-col gap-3">

        {/* {habits.map(habit => {return <h1>{habit}</h1>})}  */}

        {/* option 1 - {habits.map(habit => {return <h1>{habit}</h1>})} */}

        {/* {habits.map(habit => (<h1 key={habit.id}>{habit.name}</h1>))} */}

        {habits.map(habit => (<HabitItem key={habit.id} habit={habit} />))}
    </div>
}


type HabitItemProps = {
    habit: { id: string; name: string }
}
function HabitItem({ habit }: HabitItemProps) {
    const visibleDates = eachDayOfInterval({ start: startOfWeek(new Date()), end: endOfWeek(new Date()) })

    return (
        <div className="rounded-xl bg-zinc-800 p-4 flex-col gap-3">
            {/* <div className="flex items-center justify-between">
                <span className="font-medium text-zinc-400">{habit.name}</span>
                <span className="text-sm text-amber-400">🔥 3</span>
            </div>
            <div className="flex gap-1.5">
                {visibleDates.map(date => (
                    <Button key={date.toISOString()}>
                        <div className="flex flex-col items-center">
                            <span className="font-medium"> {format(date, "EEE")}</span>
                            <span>{format(date, "d")}</span>
                        </div>
                    </Button>))}
                <Button>Delete</Button>
            </div> */}

            <div className="flex items-center justify-between">
                <div className="py-3">
                    <span className="font-medium text-zinc-400">{habit.name}</span>
                    <span className="text-sm text-amber-400">🔥 3</span></div>
                <Button>Delete</Button>
            </div>

            <div className="flex gap-1.5">
                {visibleDates.map(date => (<Button key={date.toISOString()}>
                    <div className="flex flex-col items-center">
                        <span className="font-medium">{format(date, "EEE")}</span>
                        <span className="text-sm">{format(date, "d")}</span>
                    </div>
                </Button>))}
            </div>
        </div>
    )
}
