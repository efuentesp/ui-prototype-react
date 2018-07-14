import React from 'react'
import styles from './index.less'

const PageHeader = ({ title, content, wrapperClassName, children }) => {
  return (
    <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
      <div className="pageHeader">
        <div className="detail">
          <div className="main">
            <div className="row">
              {title && <h1 className="title">{title}</h1>}
            </div>
            <div className="row">
              {content && <div className="content">{content}</div>}
            </div>
          </div>
        </div>
      </div>
      {children ? <div className="content">{children}</div> : null}
    </div>
  )
}

export default PageHeader
