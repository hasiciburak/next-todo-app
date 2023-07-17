import { TodoItem } from '@/components/TodoItem'
import moment from 'moment'
import Head from 'next/head'

export default function Home() {
  // FOR FORMATTING TODAY'S DATE
  let momentObj = moment()
  let today: string = moment(momentObj.toISOString()).format('dddd, DD MMMM')

  return (
    <div>
      <Head>
        <title>Todos - TODOBH</title>
      </Head>
      <main className="bg-slate-50 w-full min-h-screen px-[72px] pt-[50px]">
        <div>
          <h1 className="text-slate-950 text-6xl font-thin mb-4 ">
            Greetings, Burak
          </h1>
        </div>
        <div className="mb-4 flex flex-row justify-between items-end">
          <div>
            <h1 className="text-slate-600 text-2xl font-semibold">My Day</h1>
            <p className="text-slate-600/80">{today}</p>
          </div>
          <div>
            <div className="p-3 text-4xl font-bold border-2 aspect-square w-20 flex rounded-lg justify-center items-center">
              5
            </div>
          </div>
        </div>
        <TodoItem />
      </main>
    </div>
  )
}
