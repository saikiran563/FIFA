CSS
===

```
.vz-odt--global-nav__container {
    width: 100%;
    /* min-height: 7.5rem; */
    border-bottom: 1px #cccccc;
    border-style: solid;
}

.vz-odt--nav {
    margin: 0 auto;
    /* min-height: 2rem; */
    max-width: 79.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.25rem 0 .5rem 0;
}

.vz-odt--nav--logo {
    padding-left: 1.25rem;
}

.vz-odt--nav--logo__icon {
    width: 93px;
    height: 19.5px;
}

.vz-odt--nav__wrapper {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.vz-odt--nav--mobile-menu {
    margin-left: .875rem;
    display: block;
}

.vz-odt--nav--mobile-menu__icon {
    width: .875rem;
    height: .875rem;
    display: block;
}

@media (min-width: 780px) {
    .vz-odt--nav {
        min-height: 7.5rem;
        padding: 1.25rem 0;
    }

    .vz-odt--nav__wrapper {
        justify-content: space-between;
    }

    .vz-odt--nav--logo__icon {
        width: 186px;
        height: 39px;
    }
    

    .vz-odt--nav--mobile-menu {
        display: none;
    }

    .vz-odt--nav--mobile-menu__icon {
        display: none;
    }
}

.vz-odt--nav--searchcart-login__container {
    padding-right: 1.25rem;
    display: flex;
    flex-direction: column;
}


```