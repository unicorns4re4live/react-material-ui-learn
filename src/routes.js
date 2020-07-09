import {renderRoutes} from 'react-router-config'
import {commonRoutes} from "./common/routes";
import {mainRoutes} from "./main";

const routes = [
    ...mainRoutes(),
    ...commonRoutes()
]

export const rootRoutes = () => renderRoutes(routes)