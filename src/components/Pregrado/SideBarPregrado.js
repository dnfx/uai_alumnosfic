//SideBar para seccion dedicada a pregrado
import React from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import { NavLink } from "react-router-dom";

const SideBarPregrado = () =>{
    return(
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#469DE2">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                Pregrado
            </a>
            </CDBSidebarHeader>//Header de SideBar

            <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
                <NavLink exact to="/ReglamentoPregrado" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="book">Reglamentos</CDBSidebarMenuItem>
                </NavLink>//Apartado Reglamentos que redirige a /ReglamentoPregrado
                
                <NavLink exact to="/NormativasPregrado" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="book">Normativa Interna UAI</CDBSidebarMenuItem>
                </NavLink>//Apartado Reglamentos que redirige a /NormativasPregrado
                
                <NavLink exact to="/CalendarioPregrado" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="calendar">Calendario Academico</CDBSidebarMenuItem>
                </NavLink>//Apartado Reglamentos que redirige a /CalendarioPregrado
                
                <NavLink exact to="/CalendarioPEPregrado" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="calendar">Calendario de Pruebas y Examenes</CDBSidebarMenuItem>
                </NavLink>
                
                <NavLink exact to="/MinorPregrado" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="school">Minor</CDBSidebarMenuItem>
                </NavLink>

                <NavLink exact to="/TallerPregrado" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="school">Taller de investigacion Dirigida</CDBSidebarMenuItem>
                </NavLink>

                <NavLink exact to="/CoordinacionPregrado" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Coordinacion Pregrado</CDBSidebarMenuItem>
                </NavLink>

                <NavLink exact to="/CharlasPregrado" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="video">Charlas Sumate al Zoom</CDBSidebarMenuItem>
                </NavLink>

                <NavLink exact to="/PreguntasPregado" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="question">Preguntas Frecuentes</CDBSidebarMenuItem>
                </NavLink>
            </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
                style={{
                padding: '20px 5px',
                }}
            >
            </div>
            </CDBSidebarFooter>
        </CDBSidebar>
        </div>

    )
}

export default SideBarPregrado;