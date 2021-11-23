// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/marulin/my-projects/web/my-app/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@ant-design/pro-layout/es/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/umi/plugin/openapi",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-openapi__openapi' */'/Users/marulin/my-projects/web/my-app/src/.umi/plugin-openapi/openapi.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/Users/marulin/my-projects/web/my-app/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/~demos/:uuid",
        "layout": false,
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/marulin/my-projects/web/my-app/node_modules/@umijs/preset-dumi/lib/theme/layout'), loading: LoadingComponent})],
        "component": (props) => React.createElement(
        dynamic({
          loader: async () => {
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/marulin/my-projects/web/my-app/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { default: demos } = await import(/* webpackChunkName: 'dumi_demos' */ '@@/dumi/demos');
            const { usePrefersColor } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          }
        }), props)
      },
      {
        "path": "/_demos/:uuid",
        "redirect": "/~demos/:uuid"
      },
      {
        "__dumiRoot": true,
        "layout": false,
        "path": "/~docs",
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/marulin/my-projects/web/my-app/node_modules/@umijs/preset-dumi/lib/theme/layout'), loading: LoadingComponent}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/marulin/my-projects/web/my-app/node_modules/dumi-theme-default/es/layout.js'), loading: LoadingComponent})],
        "routes": [
          {
            "path": "/~docs",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'README.md' */'/Users/marulin/my-projects/web/my-app/README.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "locale": "en-US",
              "order": null,
              "filePath": "README.md",
              "updatedTime": 1634192443004,
              "slugs": [
                {
                  "depth": 1,
                  "value": "Ant Design Pro",
                  "heading": "ant-design-pro"
                },
                {
                  "depth": 2,
                  "value": "Environment Prepare",
                  "heading": "environment-prepare"
                },
                {
                  "depth": 2,
                  "value": "Provided Scripts",
                  "heading": "provided-scripts"
                },
                {
                  "depth": 3,
                  "value": "Start project",
                  "heading": "start-project"
                },
                {
                  "depth": 3,
                  "value": "Build project",
                  "heading": "build-project"
                },
                {
                  "depth": 3,
                  "value": "Check code style",
                  "heading": "check-code-style"
                },
                {
                  "depth": 3,
                  "value": "Test code",
                  "heading": "test-code"
                },
                {
                  "depth": 2,
                  "value": "More",
                  "heading": "more"
                }
              ],
              "title": "Ant Design Pro"
            },
            "title": "Ant Design Pro"
          },
          {
            "path": "/~docs/components",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__index.md' */'/Users/marulin/my-projects/web/my-app/src/components/index.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "filePath": "src/components/index.md",
              "updatedTime": 1634192442926,
              "title": "业务组件",
              "sidemenu": false,
              "slugs": [
                {
                  "depth": 1,
                  "value": "业务组件",
                  "heading": "业务组件"
                },
                {
                  "depth": 2,
                  "value": "Footer 页脚组件",
                  "heading": "footer-页脚组件"
                },
                {
                  "depth": 2,
                  "value": "HeaderDropdown 头部下拉列表",
                  "heading": "headerdropdown-头部下拉列表"
                },
                {
                  "depth": 2,
                  "value": "HeaderSearch 头部搜索框",
                  "heading": "headersearch-头部搜索框"
                },
                {
                  "depth": 3,
                  "value": "API",
                  "heading": "api"
                },
                {
                  "depth": 2,
                  "value": "NoticeIcon 通知工具",
                  "heading": "noticeicon-通知工具"
                },
                {
                  "depth": 3,
                  "value": "NoticeIcon API",
                  "heading": "noticeicon-api"
                },
                {
                  "depth": 3,
                  "value": "NoticeIcon.Tab API",
                  "heading": "noticeicontab-api"
                },
                {
                  "depth": 3,
                  "value": "NoticeIconData",
                  "heading": "noticeicondata"
                },
                {
                  "depth": 2,
                  "value": "RightContent",
                  "heading": "rightcontent"
                }
              ],
              "group": {
                "path": "/~docs/components",
                "title": "Components"
              }
            },
            "title": "业务组件"
          }
        ],
        "title": "ant-design-pro",
        "component": (props) => props.children
      },
      {
        "path": "/user",
        "layout": false,
        "routes": [
          {
            "path": "/user/login",
            "layout": false,
            "name": "login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__Login' */'/Users/marulin/my-projects/web/my-app/src/pages/user/Login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "register-result",
            "icon": "smile",
            "path": "/user/register-result",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register-result' */'/Users/marulin/my-projects/web/my-app/src/pages/user/register-result'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/register",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register' */'/Users/marulin/my-projects/web/my-app/src/pages/user/register'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/marulin/my-projects/web/my-app/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/dashboard",
        "name": "dashboard",
        "icon": "dashboard",
        "routes": [
          {
            "path": "/dashboard",
            "redirect": "/dashboard/analysis",
            "exact": true
          },
          {
            "name": "analysis",
            "icon": "smile",
            "path": "/dashboard/analysis",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__analysis' */'/Users/marulin/my-projects/web/my-app/src/pages/dashboard/analysis'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "monitor",
            "icon": "smile",
            "path": "/dashboard/monitor",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__monitor' */'/Users/marulin/my-projects/web/my-app/src/pages/dashboard/monitor'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "workplace",
            "icon": "smile",
            "path": "/dashboard/workplace",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__workplace' */'/Users/marulin/my-projects/web/my-app/src/pages/dashboard/workplace'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/product",
        "name": "product",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Product' */'/Users/marulin/my-projects/web/my-app/src/pages/Product'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/test",
        "name": "test",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Test' */'/Users/marulin/my-projects/web/my-app/src/pages/Test'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/form",
        "icon": "form",
        "name": "form",
        "routes": [
          {
            "path": "/form",
            "redirect": "/form/basic-form",
            "exact": true
          },
          {
            "name": "basic-form",
            "icon": "smile",
            "path": "/form/basic-form",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__basic-form' */'/Users/marulin/my-projects/web/my-app/src/pages/form/basic-form'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "step-form",
            "icon": "smile",
            "path": "/form/step-form",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__step-form' */'/Users/marulin/my-projects/web/my-app/src/pages/form/step-form'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "advanced-form",
            "icon": "smile",
            "path": "/form/advanced-form",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__advanced-form' */'/Users/marulin/my-projects/web/my-app/src/pages/form/advanced-form'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/list",
        "icon": "table",
        "name": "list",
        "routes": [
          {
            "path": "/list/search",
            "name": "search-list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search' */'/Users/marulin/my-projects/web/my-app/src/pages/list/search'), loading: LoadingComponent}),
            "routes": [
              {
                "path": "/list/search",
                "redirect": "/list/search/articles",
                "exact": true
              },
              {
                "name": "articles",
                "icon": "smile",
                "path": "/list/search/articles",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__articles' */'/Users/marulin/my-projects/web/my-app/src/pages/list/search/articles'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "projects",
                "icon": "smile",
                "path": "/list/search/projects",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__projects' */'/Users/marulin/my-projects/web/my-app/src/pages/list/search/projects'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "applications",
                "icon": "smile",
                "path": "/list/search/applications",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__applications' */'/Users/marulin/my-projects/web/my-app/src/pages/list/search/applications'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/list",
            "redirect": "/list/table-list",
            "exact": true
          },
          {
            "name": "table-list",
            "icon": "smile",
            "path": "/list/table-list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__table-list' */'/Users/marulin/my-projects/web/my-app/src/pages/list/table-list'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "basic-list",
            "icon": "smile",
            "path": "/list/basic-list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__basic-list' */'/Users/marulin/my-projects/web/my-app/src/pages/list/basic-list'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "card-list",
            "icon": "smile",
            "path": "/list/card-list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__card-list' */'/Users/marulin/my-projects/web/my-app/src/pages/list/card-list'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/profile",
        "name": "profile",
        "icon": "profile",
        "routes": [
          {
            "path": "/profile",
            "redirect": "/profile/basic",
            "exact": true
          },
          {
            "name": "basic",
            "icon": "smile",
            "path": "/profile/basic",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__basic' */'/Users/marulin/my-projects/web/my-app/src/pages/profile/basic'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "advanced",
            "icon": "smile",
            "path": "/profile/advanced",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__advanced' */'/Users/marulin/my-projects/web/my-app/src/pages/profile/advanced'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "name": "result",
        "icon": "CheckCircleOutlined",
        "path": "/result",
        "routes": [
          {
            "path": "/result",
            "redirect": "/result/success",
            "exact": true
          },
          {
            "name": "success",
            "icon": "smile",
            "path": "/result/success",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__result__success' */'/Users/marulin/my-projects/web/my-app/src/pages/result/success'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "fail",
            "icon": "smile",
            "path": "/result/fail",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__result__fail' */'/Users/marulin/my-projects/web/my-app/src/pages/result/fail'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "name": "exception",
        "icon": "warning",
        "path": "/exception",
        "routes": [
          {
            "path": "/exception",
            "redirect": "/exception/403",
            "exact": true
          },
          {
            "name": "403",
            "icon": "smile",
            "path": "/exception/403",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__403' */'/Users/marulin/my-projects/web/my-app/src/pages/exception/403'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "404",
            "icon": "smile",
            "path": "/exception/404",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__404' */'/Users/marulin/my-projects/web/my-app/src/pages/exception/404'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "500",
            "icon": "smile",
            "path": "/exception/500",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__500' */'/Users/marulin/my-projects/web/my-app/src/pages/exception/500'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "name": "account",
        "icon": "user",
        "path": "/account",
        "routes": [
          {
            "path": "/account",
            "redirect": "/account/center",
            "exact": true
          },
          {
            "name": "center",
            "icon": "smile",
            "path": "/account/center",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__center' */'/Users/marulin/my-projects/web/my-app/src/pages/account/center'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "settings",
            "icon": "smile",
            "path": "/account/settings",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__settings' */'/Users/marulin/my-projects/web/my-app/src/pages/account/settings'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "name": "editor",
        "icon": "highlight",
        "path": "/editor",
        "routes": [
          {
            "path": "/editor",
            "redirect": "/editor/flow",
            "exact": true
          },
          {
            "name": "flow",
            "icon": "smile",
            "path": "/editor/flow",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__flow' */'/Users/marulin/my-projects/web/my-app/src/pages/editor/flow'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "mind",
            "icon": "smile",
            "path": "/editor/mind",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__mind' */'/Users/marulin/my-projects/web/my-app/src/pages/editor/mind'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "koni",
            "icon": "smile",
            "path": "/editor/koni",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__koni' */'/Users/marulin/my-projects/web/my-app/src/pages/editor/koni'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/index.html",
        "redirect": "/dashboard/analysis",
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/dashboard/analysis",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/marulin/my-projects/web/my-app/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
