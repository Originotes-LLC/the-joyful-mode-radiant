import { Heading, Subheading } from '@/components/text'

import { AnimatedNumber } from '@/components/animated-number'
import { clsx } from 'clsx'

const problems = [
  {
    number: 91,
    description: 'of websites get no organic search traffic from Google.',
  },
  {
    number: 75,
    description:
      'of people never scroll past the first page of search results.',
  },
  {
    number: 62,
    description:
      'of users are influenced by social media when purchasing something.',
  },
]

export function ProblemNumbers({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      {problems.map(({ number, description }) => (
        <div key={description} className="flex flex-col items-start">
          <Heading as="p">
            <AnimatedNumber start={0} end={number} /> %
          </Heading>
          <Subheading as="p" className="mt-2 max-w-xs">
            {description}
          </Subheading>
        </div>
      ))}
    </div>
  )
}
