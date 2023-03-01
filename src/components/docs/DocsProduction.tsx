import { FC } from 'react'
import { DocsNavCard } from './DocsNavCard'

export const DocsProduction: FC = () => {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <DocsNavCard
        title="Production"
        subtitle="Get your app ready and running on the Solana Mainnet"
        svgFile="coins-solid"
        link={{ url: '/docs/kinetic/kinetic-in-production', label: 'See more' }}
      />
    </div>
  )
}
