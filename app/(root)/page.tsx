import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

function Home() {
    const loggedIn = { firsName: 'Delvin'}


  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn?.firsName || "Guest"}
                subtext="Access and manage your account and transactions from anywhere in the world with ease."
                />
                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={12458.30}
                />
            </header>
        </div>
    </section>
  )
}

export default Home