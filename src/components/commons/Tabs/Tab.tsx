import * as React from "react";
import { useTabs } from "./Tabs";

export interface ITabProps {
  label: string;
}

export const Tab: React.FC<ITabProps> = props => {
  const {activeTab, setActiveTab } = useTabs();

  return (
    <li id={props.label} 
      className={`tabs__item ${props.label === activeTab ? ' selected ' : ''} 
      ${props.label === activeTab ? ' selected ' : ''} `} 
      onClick={() => setActiveTab(props.label)}>
        {props.children}
    </li>
  );
};
