import Section3 from './Section3'
const sectionItem3 = [

    {
        id: 1,
        name: ''
    },
   
    


]


const SectionItem3 = () => {
    return (
        <div className='SectionI3'>
            {sectionItem3.map((section3) => {
                return <Section3 key={section3.id} section3={section3} />
            })}
        </div>
    )
}
export default SectionItem3;

