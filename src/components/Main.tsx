import React from 'react'
import Card from './Card'
import data from '../data/item.json'

const Main = () => {
  return (
    <>
        <section className='flex flex-col gap-4 justify-center items-center mt-5 min-h-screen'>
            <header>
                <h1 className='text-3xl font-bold'>Products</h1>    
            </header>    
            <main className='flex gap-3 flex-wrap justify-center'>
              {data.map(item => (
                <Card key={item.id} data={item}></Card>
              ))}
            </main>
            <footer className='mb-5'>
                <div className="join">
                  <button className="join-item btn">1</button>
                  <button className="join-item btn btn-active">2</button>
                  <button className="join-item btn">3</button>
                  <button className="join-item btn">4</button>
                </div>
            </footer>
        </section>

    </>
  )
}

export default Main