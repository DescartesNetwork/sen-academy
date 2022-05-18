import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
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
import PostCard from './postCard'
import MakeUpHtml from 'components/makeUpHtml'

import {
  BlogTabs,
  DEFAULT_LIMIT_POST,
  ALIASES,
  PostData,
  SelectedTabs,
} from 'constant'
import { compareAliases } from 'helper'
import { AppState } from 'store'

import './index.less'
import { useAllPostData } from 'hooks/useAllPostsData'

const Blogs = () => {
  const [selectedCat, setSelectedCat] = useState<SelectedTabs>(SelectedTabs.all)
  const [postPerpage, setPostPerpage] = useState(DEFAULT_LIMIT_POST)
  const {
    i18n: { system },
  } = useSelector((state: AppState) => state)
  const history = useHistory()
  const { search } = useLocation()
  const query = useMemo(() => new URLSearchParams(search), [search])
  const blogCat = query.get('category') || ''
  const posts = useAllPostData()
  const keyCat = useMemo(() => {
    for (let alias in ALIASES) {
      if (alias.includes(blogCat)) return alias[0]
    }
    return 'dev'
  }, [blogCat])

  const compare = (a: PostData, b: PostData) => {
    const aDate = new Date(a.updatedAt)
    const bDate = new Date(b.updatedAt)
    if (aDate > bDate) return -1
    if (aDate < bDate) return 1
    return 0
  }

  const onSelectCategory = (e: RadioChangeEvent) => {
    setSelectedCat(e.target.value)
    return setPostPerpage(DEFAULT_LIMIT_POST)
  }

  const blogTabs: BlogTabs[] = system.blogs.tabs
  const postsData: PostData[] = posts.filter((value) => {
    return compareAliases(value.category, [blogCat])
  })

  const filteredData = useMemo(() => {
    if (!postsData.length) return []
    return postsData?.filter(({ category }) => category.includes(selectedCat))
  }, [postsData, selectedCat])

  const renderData = useMemo(() => {
    const nextData = selectedCat === SelectedTabs.all ? postsData : filteredData
    if (!nextData.length) return []
    return nextData?.sort(compare)
  }, [filteredData, postsData, selectedCat])

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
                <MakeUpHtml>{system.banner.subDesc[keyCat]?.title}</MakeUpHtml>
              </span>
              <Space direction="vertical">
                <Typography.Text style={{ fontSize: 20 }} type="secondary">
                  {system.banner.subDesc[keyCat]?.label}
                </Typography.Text>
              </Space>
            </Space>
          </Col>
          <Col xs={24} md={12} className={keyCat === 'dev' ? 'bg-circle' : ''}>
            <Image
              style={{ position: 'relative', zIndex: 9 }}
              src={system.banner.subDesc[keyCat]?.src}
              preview={false}
            />
          </Col>
          <Col span={24} className="safe-space" /> {/* Safe space */}
          <Col span={24}>
            <Radio.Group
              onChange={onSelectCategory}
              className="blogs-btn"
              defaultValue={selectedCat}
            >
              <Space>
                {blogTabs?.map((tab) => (
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
                <Col xs={24} md={12} lg={8} key={data.id + idx}>
                  <PostCard
                    data={data}
                    onClick={(id) =>
                      history.push(`/blogs/${id}?category=${keyCat}`)
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
              disabled={postPerpage >= renderData.length}
            >
              {system.viewMore}
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Blogs
