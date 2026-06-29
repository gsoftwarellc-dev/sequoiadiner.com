import './Menu.css'

const MENUS = [
  {
    title: 'Main Menu',
    href: '/menu/main-menu.pdf',
  },
  {
    title: 'Daily Special',
    href: '/menu/daily-special.pdf',
  },
]

function Menu() {
  return (
    <section className="menu-page">
      {MENUS.map((menu) => (
        <iframe key={menu.title} className="menu-page-frame" src={menu.href} title={`${menu.title} PDF`} />
      ))}
    </section>
  )
}

export default Menu
