import { useState } from "react";
import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {

    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTab = (tab, index) => {
        setLeft(index * 100)
        setTimeout(() => setSelectedTab(index), 300)
        onTabChange(tab, index);
    }

    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {data.map((tab, id) => {
                    return <span
                        key={id}
                        className={`tabItem ${selectedTab === id ? "active" : ""}`}
                        onClick={() => activeTab(tab, id)}
                    >
                        {tab}
                    </span>
                })}
                <span className="movingBg" style={{ left }}></span>
            </div>
        </div>
    )
}

export default SwitchTabs