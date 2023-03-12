import { FC } from 'react'
import { DocsNavCard } from './DocsNavCard'

export const DocsHelp: FC<{ discord?: boolean }> = ({ discord = false }) => {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <DocsNavCard
        title="Kinny Discord"
        subtitle="Join our community."
        icon="discord"
        link={{ url: 'http://community.kinny.io', label: 'Join now' }}
      />
    </div>
  )
}
