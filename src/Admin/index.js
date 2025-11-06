import React, { useState } from "react";
import "./admin.css";

// Componentes simples para cada pestaña
function UsuariosTab() {
  return (
    <section>
      <h2>Gestión de usuarios</h2>
      <p>Aquí podrás ver, agregar, editar y eliminar usuarios registrados.</p>
      <ul>
        <li>Usuario 1 — Administrador</li>
        <li>Usuario 2 — Alumno</li>
        <li>Usuario 3 — Docente</li>
      </ul>
    </section>
  );
}

function RolesTab() {
  return (
    <section>
      <h2>Roles y permisos</h2>
      <p>Administra los permisos de cada rol del sistema.</p>
      <ul>
        <li>Administrador — acceso total</li>
        <li>Alumno — acceso limitado al módulo de asesorías</li>
        <li>Docente — acceso a reportes y asesorías asignadas</li>
      </ul>
    </section>
  );
}

function LogsTab() {
  return (
    <section>
      <h2>Registros del sistema (Logs)</h2>
      <p>Consulta las acciones recientes de los usuarios.</p>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Usuario</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-11-06</td>
            <td>Administrador</td>
            <td>Inició sesión</td>
          </tr>
          <tr>
            <td>2025-11-06</td>
            <td>Alumno</td>
            <td>Agendó asesoría</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

function ConfiguracionTab() {
  return (
    <section>
      <h2>Configuración del sistema</h2>
      <p>Personaliza opciones generales del sistema o exporta datos.</p>
      <button>Respaldar base de datos</button>
      <button style={{ marginLeft: 8 }}>Restaurar configuración</button>
    </section>
  );
}

// Componente principal del módulo admin
export default function AdminModule() {
  const [activeTab, setActiveTab] = useState("usuarios");

  function renderTab() {
    switch (activeTab) {
      case "usuarios":
        return <UsuariosTab />;
      case "roles":
        return <RolesTab />;
      case "logs":
        return <LogsTab />;
      case "configuracion":
        return <ConfiguracionTab />;
      default:
        return <UsuariosTab />;
    }
  }

  return (
    <div className="admin-module">
      <h1>Panel del Administrador</h1>

      <nav className="tabs">
        <button
          className={activeTab === "usuarios" ? "active" : ""}
          onClick={() => setActiveTab("usuarios")}
        >
          Usuarios
        </button>
        <button
          className={activeTab === "roles" ? "active" : ""}
          onClick={() => setActiveTab("roles")}
        >
          Roles
        </button>
        <button
          className={activeTab === "logs" ? "active" : ""}
          onClick={() => setActiveTab("logs")}
        >
          Logs
        </button>
        <button
          className={activeTab === "configuracion" ? "active" : ""}
          onClick={() => setActiveTab("configuracion")}
        >
          Configuración
        </button>
      </nav>

      <div className="content">{renderTab()}</div>
    </div>
  );
}
