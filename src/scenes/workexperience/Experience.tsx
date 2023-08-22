type Props = {
  icon: JSX.Element
  url: string
  company: string
  dates: string
  title: string
  description: JSX.Element
}

const Experience = ({
  icon,
  url,
  company,
  dates,
  title,
  description,
}: Props) => {
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <a href={`${url}`} target="_blank">
        <h4 className="font-bold text-center pb-2 underline hover:text-secondary-500">
          {company}
        </h4>
      </a>

      <h4 className="font-bold text-center">{title}</h4>
      <p className="text-sm italic text-center">{dates}</p>
      <div className="py-3 px-6">{description}</div>
    </div>
  )
}

export default Experience
