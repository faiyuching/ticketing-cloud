import Link from 'next/link';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon } from '../lib/ionic';
import { logoGithub } from 'ionicons/icons';

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sell Tickets', href: '/tickets/new' },
    currentUser && { label: 'My Orders', href: '/orders' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonTitle>卓明</IonTitle>
        <IonButton color="dark" href={'/forecast'}>预测</IonButton>
        <IonButton color="dark" href={'/response'}>响应</IonButton>
        <IonButton color="dark" href={'/product'}>产品</IonButton>
        <IonButton color="dark" href={'/forum'}>论坛</IonButton>
        <IonButton color="dark" href={'/develop'}>
          <IonIcon slot="start" icon={logoGithub} />
          参与开发
        </IonButton>
      </IonButtons>
      <IonButtons slot="end">
        {currentUser && <IonButton color="primary" href={'/tickets/new'}>Sell Tickets</IonButton>}
        {currentUser && <IonButton color="primary" href={'/orders'}>My Orders</IonButton>}
        {!currentUser && <IonButton color="primary" href={'/auth/signup'}>注册</IonButton>}
        {!currentUser && <IonButton color="primary" href={'/auth/signin'}>登录</IonButton>}
        {currentUser && <IonButton color="danger" href={'/auth/signout'}>登出</IonButton>}
      </IonButtons>
    </IonToolbar>
  </IonHeader>
  );
};
