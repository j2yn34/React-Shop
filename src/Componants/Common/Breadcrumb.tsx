import { Category } from "./category";

type Breadcrumbs = {
  category?: string;
  crumb?: string;
} & typeof defaultProps;

const defaultProps = {
  category: "",
  crumb: "",
};

const Breadcrumb = ({ category, crumb }: Breadcrumbs): JSX.Element => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>{!!Category[category] ? Category[category] : category}</li>
        <li>{crumb}</li>
      </ul>
    </div>
  );
};

Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
