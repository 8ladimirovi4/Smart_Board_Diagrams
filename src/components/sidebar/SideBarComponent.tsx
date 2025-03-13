import { MenuItemOptions, MenuItem } from 'primereact/menuitem';
import { classNames } from 'primereact/utils';
import { StyledIconWrapper, StyledMeniItemName, StyledMenu, StyledMenuItem } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  NodeService,
  AdministrationIcon,
  AlarmsIcon,
  DachboardsIcon,
  DevicesIcon,
  HomeIcon,
  MaintenanceIcon,
  MeasurementsIcon,
  SchemesIcon,
  SettingsIcon,
  ActiveHomeIcon,
  ActiveDachboardsIcon,
  ActiveSchemesIcon,
  ActiveAlarmsIcon,
  ActiveDevicesIcon,
  ActiveMeasurementsIcon,
  ActiveAdministrationIcon,
  ActiveMaintenanceIcon,
  ActiveSettingsIcon,
} from './data';
import { v4 } from 'uuid';
import TooltipComponent from 'components/tooltip/TooltipComponent';

const SideBarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredIcon, setHoveredIcon] = useState<string | undefined>('');
  const [clickedIcon, setClickedIcon] = useState<string | undefined>('');

  const startPagePath = location.pathname;

  useEffect(() => {
    NodeService.getPathMap().then((data: any) => setClickedIcon(data[startPagePath]));
  }, []);
  const itemTemplate = (item: MenuItem, options: MenuItemOptions) => {
    const Icon = clickedIcon === item.label || hoveredIcon === item.label ? item.data : item.icon;
    const tooltipId = `sidebar-icon${v4()}`;

    return (
      <StyledMenuItem
        id={tooltipId}
        role="menuitem"
        data-p-focused="false"
        className={classNames(options.className)}
        onClick={(evt) => {
          setClickedIcon(item.label);
          options.onClick(evt);
        }}
        onMouseEnter={() => setHoveredIcon(item.label)}
        onMouseLeave={() => setHoveredIcon('')}
      >
        <StyledIconWrapper icon={Icon} />
        <StyledMeniItemName className="p-menuitem-text">{item.label}</StyledMeniItemName>
        <TooltipComponent target={`#${tooltipId}`} content={item.label} position="right" />
      </StyledMenuItem>
    );
  };

  const items: MenuItem[] = [
    {
      label: 'Dev Extreme Diagram',
      icon: SchemesIcon,
      data: ActiveSchemesIcon,
      command: () => {
        navigate('/');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
    {
      label: 'JointJs+',
      icon: SchemesIcon,
      data: ActiveSchemesIcon,
      command: () => {
        navigate('/scheme2');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
    {
      label: 'react-cytoscapejs',
      icon: SchemesIcon,
      data: ActiveSchemesIcon,
      command: () => {
        navigate('/scheme3');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
    {
      label: 'React Diagrams',
      icon: SchemesIcon,
      data: ActiveSchemesIcon,
      command: () => {
        navigate('/scheme4');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
    {
      label: 'React Flow',
      icon: SchemesIcon,
      data: ActiveSchemesIcon,
      command: () => {
        navigate('/scheme5');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
    {
      label: 'Webix Diagram',
      icon: SchemesIcon,
      data: ActiveSchemesIcon,
      command: () => {
        navigate('/scheme6');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
  ];

  return <StyledMenu model={items} />;
};

export default SideBarComponent;
