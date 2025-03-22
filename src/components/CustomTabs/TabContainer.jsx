import CustomTabs from "./CustomTabs"

const RandomComponent = () => {
    return <div>Lorem ipsum dolor sit amet.</div>
}

const items = [
    {   label: "Product1",
        content: "Lorem ipsum dolor sit amet consectetur, debitis voluptate. Saepe, totam."
    },   
    {   label: "Product2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam neque accusamus delectus esse qui ut minima libero in unde soluta est fuga quia consequatur voluptas odit, debitis voluptate. Saepe, totam."
    },
    {   label: "Product3",
        content: "Lorem ipsum dolor sit."
    },
    {   label: "Product4",
        content: <RandomComponent/>
    }
]

const TabContainer = () => {
    return <CustomTabs tabItems={items}/>
}

export default TabContainer