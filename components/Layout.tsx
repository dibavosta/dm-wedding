import Navigation from "./Navigation";

function Layout(props: any) {
  return (
    <div>
      <Navigation locale={props.locale} />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
