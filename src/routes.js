import {renderRoutes} from 'react-router-config'
import {commonRoutes} from "./common/routes";
import {mainRoutes} from "./main/routes";

const routes = [
    ...mainRoutes(),
    ...commonRoutes()
]

export const rootRoutes = () => renderRoutes(routes)