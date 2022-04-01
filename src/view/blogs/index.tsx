import { useMemo, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import {
  Button,
  Col,
  Image,
  Radio,
  RadioChangeEvent,
  Row,
  Space,
  Typography,
} from 'antd'
import {
  BlogCategory,
  DEFAULT_LIMIT_POST,
  PostContent,
  SelectedTabs,
} from 'constant'
import PostCard from './postCard'

import { coreData } from 'static/base/core'
import { data } from 'static/base/blogs'

import './index.less'
import MakeUpHtml from 'components/makeUpHtml'

const {
  banner: { subDesc },
  blogs: { tabs },
} = coreData

const Blogs = () => {
  const [seletecCat, setSeletecCat] = useState<SelectedTabs>(SelectedTabs.all)
  const [postPerpage, setPostPerpage] = useState(DEFAULT_LIMIT_POST)
  const location = useLocation()
  const history = useHistory()
  const query = useMemo(() => new URLSearchParams(location.search), [location])
  const blogCat = query.get('category') || ''
  const postData = data[blogCat as BlogCategory]
  const banerData = subDesc[blogCat as BlogCategory]

  const compare = (a: PostContent, b: PostContent) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  }

  const onSelectCategory = (e: RadioChangeEvent) => {
    setSeletecCat(e.target.value)
    return setPostPerpage(DEFAULT_LIMIT_POST)
  }

  const filteredData = postData?.filter(({ category }) =>
    category.includes(seletecCat),
  )
  const renderData = useMemo(() => {
    const nextData = seletecCat === SelectedTabs.all ? postData : filteredData
    return nextData?.sort(compare)
  }, [filteredData, postData, seletecCat])
  const limitPost =
    postPerpage >= renderData?.length ? renderData?.length : postPerpage

  return (
    <Row gutter={[24, 24]} style={{ padding: '0 12px' }} justify="center">
      <Col span={24} className="container">
        <Row
          gutter={[40, 40]}
          className="blog-banner"
          align="middle"
          justify="center"
        >
          <Col xs={24} md={12}>
            <Space direction="vertical" size={32}>
              <span className="title">
                <MakeUpHtml>{banerData?.title}</MakeUpHtml>
              </span>
              <Space direction="vertical">
                <Typography.Text type="secondary">
                  {banerData?.label}
                </Typography.Text>
              </Space>
            </Space>
          </Col>
          <Col xs={24} md={12}>
            <Image src={banerData?.src} preview={false} />
          </Col>
          <Col span={24} className="safe-space" /> {/* Safe space */}
          <Col span={24}>
            <Radio.Group
              onChange={onSelectCategory}
              className="blogs-btn"
              defaultValue={seletecCat}
            >
              <Space>
                {tabs.map((tab) => (
                  <Space key={tab.key}>
                    <Radio.Button value={tab.key}>{tab.label}</Radio.Button>
                  </Space>
                ))}
              </Space>
            </Radio.Group>
          </Col>
          <Col span={24}>
            <Row gutter={[24, 24]}>
              {renderData?.slice(0, limitPost).map((data, idx) => (
                <Col xs={24} md={12} lg={8} key={data.title + idx}>
                  <PostCard
                    data={data}
                    onClick={(id) =>
                      history.push(`/blogs/${id}?category=${blogCat}`)
                    }
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col>
            <Button
              className="blogs-btn"
              onClick={() => setPostPerpage(postPerpage + 3)}
            >
              View more
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Blogs
