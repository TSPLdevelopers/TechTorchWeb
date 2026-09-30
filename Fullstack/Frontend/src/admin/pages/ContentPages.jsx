import React from "react";
import ResourcePage from "../components/ResourcePage";
import { eventsConfig, jobsConfig, newsConfig, updatesConfig, whitepapersConfig } from "../config/resources.jsx";

export const NewsPage = () => <ResourcePage config={newsConfig} />;
export const JobsPage = () => <ResourcePage config={jobsConfig} />;
export const EventsPage = () => <ResourcePage config={eventsConfig} />;
export const WhitepapersPage = () => <ResourcePage config={whitepapersConfig} />;
export const UpdatesPage = () => <ResourcePage config={updatesConfig} />;
