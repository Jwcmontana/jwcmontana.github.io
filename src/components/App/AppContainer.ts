import React from "react";
import Layout from "../Layout/Layout";
import { LayoutProps } from "../Layout/LayoutProps";
import { AppContainerProps } from "./AppContainerProps";
import AppView from "./AppView";



export class AppContainer extends React.Component<AppContainerProps> {

  public render(): React.ReactNode {
    
    const appView = React.createElement(AppView);
    
    const layoutProps :LayoutProps = {
      children: [appView]
    }

    
    return React.createElement(Layout, layoutProps);
  }
}