#!/usr/bin/env python
# -*- coding: utf-8 -*-


from jinja2 import Environment, PackageLoader

env = Environment(loader=PackageLoader('site-generator', 'templates'))

def generate_page(template, navbar, footer, content):
    '''generate an html page from the given snippets'''
    
    return template.render(footer=footer, content=content, navbar=navbar)

if __name__ == "__main__":

    base = env.get_template('base.html')
    footer = env.get_template('footer.html').render()
    navbar = env.get_template('navbar.html').render()
    main = env.get_template('homepage-content.html').render()

    print generate_page(base, navbar, footer, main)

